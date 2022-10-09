const StyleDictionaryPackage = require('style-dictionary');
 
// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

// CONST TYPESCRIPT
 
StyleDictionaryPackage.registerFormat({
 name: 'ts/variables',
 formatter: function (dictionary, config) {
   return `${this.selector} {
     ${dictionary.allProperties.map(prop => `  ${prop.name}: '${prop.value}',`).join('\n')}
   }`
 }
}); 
 
StyleDictionaryPackage.registerTransform({
 name: 'sizes/px',
 type: 'value',
 matcher: function(prop) {
     // You can be more specific here if you only want 'em' units for font sizes 
     const array=["fontSize", "spacing", "borderRadius", "borderWidth", "sizing",'padding-8']
     for(let i =0 ; i<200 ; i++){
       array.push('padding-'+i);
       array.push('border-radius-'+i);
       array.push('gap-'+i);
     }
    
     return  array.includes(prop.attributes.category);
 },
 transformer: function(prop) {
     // You can also modify the value here if you want to convert pixels to ems
     return parseFloat(prop.original.value) / 16 + 'em';
 }
 });
 
function getStyleDictionaryConfig(theme) {
return {
 "source": [
   `sd-tokens/${theme}.json`,
 ],
 "platforms": {
   "web": {
     "transforms": ["attribute/cti", "name/cti/camel", "sizes/px", "font/objC/literal", "asset/flutter/literal"],
     "buildPath": `tokens/typescript/`,
     "files": [{
         "destination": `${theme}.ts`,
         "format": "ts/variables",
         // "selector": `.${theme}`
         "selector": `export const ${theme} =`
       }]
   }
 },
};
}
 
console.log('Build started...');
 
// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS
 
['colors', 'shadows', 'typography', 'buttons'].map(function (theme) {
 
   console.log('\n==============================================');
   console.log(`\nProcessing: [${theme}]`);
   console.log(theme)
   const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));
 
   StyleDictionary.buildPlatform('web');
 
   console.log('\nEnd processing');
})
 
console.log('\n==============================================');
console.log('\nBuild completed!');
 
 
 
 

