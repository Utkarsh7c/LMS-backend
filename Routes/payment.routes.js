import { Router } from "express";
import { getRazorPayApiKey,verifySubscription,cancelSubscription,getAllPayments,buySubscription } from "../Controllers/payment.controller.js";
import { authorizedRoles, authorizedSubscriber, isLoggedIn } from "../Middlewares/auth.middleware.js";
const router=Router();


router.route('/razor-pay')
.get(isLoggedIn,
    getRazorPayApiKey)

router.route('/subscribe')
.post(isLoggedIn,buySubscription)
router.
route('/verify')
.post(isLoggedIn,verifySubscription)

router
.route('/unsubscribe')
.post(isLoggedIn, authorizedSubscriber,  cancelSubscription) // ** middle one updated 

router.route('/').get(isLoggedIn, authorizedRoles ,getAllPayments);
export default router;

