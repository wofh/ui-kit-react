module.exports = {
   printWidth: 100,
   tabWidth: 3,
   bracketSpacing: true,
   trailingComma: 'es5',
   singleQuote: true,
   overrides: [
      {
         files: '*.html',
         options: { parser: 'babel' },
      },
   ],
};
