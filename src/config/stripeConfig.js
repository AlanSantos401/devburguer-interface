import  { loadStripe } from '@stripe/stripe-js';

const stripepromise = loadStripe(
    'pk_test_51R0komATl7aiRC7MBcYANfszzpJIZBOoaF06kbf1YPUZKjpD5Td78cioQOpJLwopRSMUP5jIOUnxO2eBelqGjfeH00oaR47IrJ'
);

export default stripepromise;