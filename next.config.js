/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// {
//   test: /\.css$/,
//   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
// },
// {
//   test: /\.module.(s(a|c)ss)$/,
//   use: [
//     'style-loader',
//     {
//       loader: 'css-loader',
//       options: {
//         sourceMap: isDev,
//         modules: {
//           localIdentName: '[local]-[hash:base64:5]',
//         },
//       },
//     },
//     {
//       loader: 'sass-loader',
//       options: {
//         sourceMap: isDev,
//       },
//     },
//   ],
// },
// {
//   test: /\.(sa|sc)ss$/,
//   exclude: /\.module.(s(a|c)ss)$/,
//   use: [
//     'style-loader',
//     {
//       loader: 'css-loader',
//       options: {
//         modules: false,
//         sourceMap: isDev,
//       },
//     },
//     {
//       loader: 'sass-loader',
//       options: {
//         sourceMap: isDev,
//       },
//     },
//   ],
// },
// {
//   test: /\.(png|jpg|svg)$/,
//   include: /images/,
//   exclude: /fonts/,
//   use: {
//     loader: 'url-loader?limit=100000&name=images/[hash].[ext]',
//   },
// },

module.exports = nextConfig;
