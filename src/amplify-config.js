import Amplify from 'aws-amplify'; // Import Amplify from 'aws-amplify' package
import awsconfig from './config/aws-exports'; // Ensure the path to your aws-exports.js file is correct

Amplify.configure(awsconfig); // Configure Amplify with your awsconfig

export default Amplify; // Export Amplify as the default export
export { awsconfig }; // 