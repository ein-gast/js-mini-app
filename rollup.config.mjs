import url from '@rollup/plugin-url';

export default [
    {
        input: ['src/main.js'],
        plugins: [
            url({ include: 'src/index.html' }), // толко для того чтобы rollup делал watch на файл
        ]
    }
];
