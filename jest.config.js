module.exports = {
	verbose: true,
	testURL: "http://localhost/",
	testResultsProcessor: "./node_modules/jest-json-reporter",
	moduleFileExtensions: [ "ts", "js" ],
	transform: {
		".(ts|js)": "ts-jest"
	},
	moduleNameMapper: {
		"^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
	},
	setupFilesAfterEnv: [ "jest-expect-message" ],
	testEnvironment: "node",
	testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|js)$"
}
