const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                'ecmg-dark': '#4268cf',
                'ecmg-light': '#547ce4'
            }
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui')
    ]
}
