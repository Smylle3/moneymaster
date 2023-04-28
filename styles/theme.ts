import { extendTheme } from "@chakra-ui/react"

export const myTheme = extendTheme({
    colors: {
        primary: {
            50: "#F5F9F5",
            100: "#E4F2E4",
            200: "#CDEACD",
            300: "#B7E3B7",
            400: "#9DDC9D",
            500: "#83D583",
            600: "#6CBF6C",
            700: "#548F54",
            800: "#3D6B3D",
            900: "#253625",
        },
        secondary: {
            100: "#91ADD8",
            200: "#6A9CB8",
            300: "#538995",
            400: "#497573",
            500: "#445F55",
            600: "#3E4A3D",
        },
        tertiary: {
            100: "#00B1FF",
            200: "#4F9AF5",
            300: "#7980E2",
            400: "#9664C6",
            500: "#A943A1",
            600: "#B01976",
        },
    },
    fonts: {
        heading: `'Quicksand', sans serif`,
        body: `'Quicksand', sans serif`,
    },
})
