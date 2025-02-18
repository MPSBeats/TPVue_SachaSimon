const inputValidator = (input: string, name: string): boolean => {
    switch(name){
        case 'email':
            const emailPattern = new RegExp(/[A-Z0-9.%+-]+@[A-Z0-9.-]+.+.[A-Z]{2,4}/i);
            return emailPattern.test(input);
            break;
        case 'password':
            const passwordPattern = new RegExp(
                /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[#^$@$!%*?&])[A-Za-z\d#^$@$!%*?&_]{8,100}$/
            );
            return passwordPattern.test(input);
            break;
        default:
            return false
    }
};

export default inputValidator