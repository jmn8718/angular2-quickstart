System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },
    packages: {'app2': {defaultExtension: 'ts'}}
});
System.import('app2/main')
    .then(null, console.error.bind(console));