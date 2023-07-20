import { login,Register  } from '../controllers/authController.js'
const authRoutes = (app) => {

// auth routes
app.route('/auth/signup')
.post(Register);

app.route('/auth/login')
.post(login);
};
export default authRoutes;
