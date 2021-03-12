import * as yup from "yup";

export const schema = yup.object().shape({
	keywords: yup
		.array()
		.required()
		.of(yup.string())
		.test(
			"missing-keywords",
			"Does not contain required keywords",
			(keywords) => !!(keywords?.includes("@blockpool-io") && keywords?.includes("BPL-wallet")),
		),
	name: yup.string().required(),
	version: yup.string(),

	"BPL-wallet": yup.object().shape({
		categories: yup.array().of(yup.string()),
		logo: yup.string(),
		permissions: yup.array().of(yup.string()),
		title: yup.string(),
		urls: yup.array().of(yup.string()),
	}),
});
