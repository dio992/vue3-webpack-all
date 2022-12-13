module.exports = { 
  env : {
   browser:true,
   node:true
  },
  extends: [
       //vue
       'plugin:vue/vue3-strongly-recommended',
       //js
       'eslint:recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    babelOptions: {
      parserOpts: {
        plugins: ["jsx"]
      }
    }
  },
  rules: {    
       "vue/html-closing-bracket-newline": ["error", {
       "singleline": "never",
       "multiline": "never"
       }],
       
       "vue/html-self-closing": ["error", {
       "html": {
           "void": "always",
           "normal": "never",
           "component": "always"
       },
       "svg": "always",
       "math": "always"
       }]
       
  }
}
