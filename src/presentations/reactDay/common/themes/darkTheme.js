import createTheme from "spectacle/lib/themes/default";

const initialTheme = createTheme({
	primary: "white",
	secondary: "black",
	tertiary: "#09b5c4",
	quartenary: "rgba(255, 219, 169, 0.43)",
}, {
	primary: "Open Sans Condensed"
});

export const theme = {
	...initialTheme,
	screen: {
		...initialTheme.screen,
		components: {
			...initialTheme.screen.components,
			code: {
				...initialTheme.screen.components.code,
				color: initialTheme.screen.colors.quartenary
			},
			text: {
				...initialTheme.screen.components.text,
				color: initialTheme.screen.colors.quartenary
			},
			link: {
				...initialTheme.screen.components.link,
				color: initialTheme.screen.colors.secondary
			}
		}
	}
};
