/** @type {import('next').NextConfig} */
if (
    process.env.LD_LIBRARY_PATH == null ||
    !process.env.LD_LIBRARY_PATH.includes(
        `${process.env.PWD}/node_modules/canvas/build/Release:`,
    )
) {
    process.env.LD_LIBRARY_PATH = `${
        process.env.PWD
    }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}

const nextConfig = {
    // webpack: (config) => {
    //     config.resolve.alias.canvas = false;
    //
    //     return config
    // },
    // experimental: {
    //     urlImports: ['https://example.com/assets/', 'https://cdn.skypack.dev'],
    // },
};

export default nextConfig;
