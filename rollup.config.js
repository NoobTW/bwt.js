import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default [
	{
		input: 'src/index.js',
		output: {
			file: 'dist/bwt.js',
			format: 'cjs',
			name: 'Bwt',
		},
		plugins: [
			babel({
				babelrc: false,
				presets: [['env', { modules: false }]],
			}),
			uglify({
				output: {
					preamble: '/* bwt.js by NoobTW */',
				},
			}),
		],
	},
	{
		input: 'src/index.js',
		output: {
			file: 'dist/bwt.iife.js',
			format: 'iife',
			name: 'Bwt',
		},
		plugins: [
			babel({
				babelrc: false,
				presets: [['env', { modules: false }]],
			}),
			uglify({
				output: {
					preamble: '/* bwt.js by NoobTW */',
				},
			}),
		],
	}
];
