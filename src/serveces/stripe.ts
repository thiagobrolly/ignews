import Stripe from "stripe";
import versionFile  from "../../package.json";

const { version } = versionFile;

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews",
    version,
  },
});
