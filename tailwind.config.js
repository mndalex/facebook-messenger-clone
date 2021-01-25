module.exports = {
    purge: [
        './resources/**/*.blade.php',

        './resources/**/*.js',

        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1255px',
        },
        extend: {
            spacing: {
                '55%': '55%',
                0.75: '0.1875rem',
                1.2: '0.3rem',
                3.625: '0.90625rem',
                7.5: '1.875rem',
                13: '3.25rem',
                37.5: '9.375rem',
                110: '27.5rem',
                132: '33rem',
            },
            lineHeight: {
                13: '3.25rem',
                21.25: '5.3125rem',
            },
            fontSize: {
                5.833: '3.5rem',
            },
            maxWidth: {
                '0.763889xl': '27.5rem',
                '0.91667xl': '33rem',
                '1.041667xl': '9.375rem',
            },
            opacity: {
                98: '0.98',
            },
            borderRadius: {
                '0.1875xl': '0.09375rem',
                '1.25xl': '0.625rem',
                '6.25xl': '3.125rem',
            },
            zIndex: {
                '-10': -10,
            },
            rotate: {
                40: '40deg',
            },
            colors: {
                primary: '#0A7CFF',
            },
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        function({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen xl': {
                        maxWidth: '1195px',
                    },
                },
            });
        },
    ],
};
