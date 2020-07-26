const { program } = require('commander');
const ejs = require('ejs');
const fs = require('fs');

const validLayerNames = [
    'atoms',
    'molecules',
    'organisms',
    'templates',
];

function assertLayerName(layerName) {
    if (!validLayerNames.includes(layerName)) {
        throw new Error('Invalid Layer Name. Select from: ' + validLayerNames.join(' | '))
    }
};

program.version('0.0.1');

program
    .command('scaffold <layer> <name>')
    .description('generate new Vue Component and Story from template')
    .action((layer, name) => {
        assertLayerName(layer)

        ejs.renderFile(
            './src/component_templates/TemplateComponent.vue.ejs',{
                layer,
                name,
            }, function(err, html){
                if (err) { throw err }
                const writeFile = `./src/components/${layer}/${name}.vue`
                fs.writeFile(writeFile, html, {flag: 'wx'}, (err) => {
                    if (err) { throw err }
                })
            })

        ejs.renderFile(
            './src/component_templates/TemplateComponent.stories.ts.ejs',{
                layer,
                name,
            }, function(err, html){
                if (err) { throw err }
                const writeFile = `./src/components/${layer}/${name}.stories.ts`
                fs.writeFile(writeFile, html, {flag: 'wx'}, (err) => {
                    if (err) { throw err }
                })
            })

        console.log(`${layer}/${name} has been created under src/components`)
    });

program.parse(process.argv);