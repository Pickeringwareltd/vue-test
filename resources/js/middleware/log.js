export default function log({ next, to }) {

    console.log('Going to ' + JSON.stringify(to));

  	return next();
}
