class VigenereCipheringMachine {
    constructor(isDirect) {
        if (arguments.length === 0) {
            this.isDirect = true;
        }  else if (typeof isDirect === 'boolean') {
            this.isDirect = isDirect;
        }    
    }

    encrypt (message, key) {
        if (arguments.length < 2 || typeof message !== 'string' ||  typeof key !== 'string') {
            throw  Error();
        } else if (key.length < message.length) {
            while (key.length <= message.length) {
                key = key + key;
            }
            const arrMessage = message.toUpperCase().split('');
            const arrKey = key.toUpperCase().split('');
           
            let counter = 0;

            arrMessage.forEach((item,index) => {
                if (item.charCodeAt() > 90) {
                    arrMessage[index] = item.charCodeAt() * -1;
                } else {
                    arrMessage[index] = item.charCodeAt() - 65;
                }
            });

            arrKey.forEach((item,index) => {
                arrKey[index] = item.charCodeAt() - 65;
            });
            
            arrMessage.forEach((item,index) => {
                if (arrMessage[index] < 0) {
                    counter++;
                } else if (arrMessage[index] + arrKey[index] < 26) {
                    arrMessage[index] =  (arrMessage[index] + arrKey[index - counter]);
                } else {
                    arrMessage[index] = ((arrMessage[index] + arrKey[index - counter]) % 26);
                }
            });
              
            arrMessage.forEach((item,index) => {
                if (arrMessage[index] < -90) {
                    arrMessage[index] =  String.fromCharCode(arrMessage[index] * -1);
                } else if ( arrMessage[index] < 26) {
                    arrMessage[index] =  String.fromCharCode(arrMessage[index] + 65);
                } else {
                    arrMessage[index] =  String.fromCharCode((arrMessage[index] % 26) + 65);
                }
            });
              
            return this.isDirect ? arrMessage.join('') : arrMessage.reverse().join('');

        } else {
            const arrMessage = message.toUpperCase().split('');
            const arrKey = key.toUpperCase().split('');
           
            let counter = 0;

            arrMessage.forEach((item,index) => {
                if (item.charCodeAt() > 90) {
                    arrMessage[index] = item.charCodeAt() * -1;
                } else {
                    arrMessage[index] = item.charCodeAt() - 65;
                }
            });

            arrKey.forEach((item,index) => {
                arrKey[index] = item.charCodeAt() - 65;
            });
            
            arrMessage.forEach((item,index) => {
                if (arrMessage[index] < 0) {
                    counter++;
                } else if (arrMessage[index] + arrKey[index] < 26) {
                    arrMessage[index] =  (arrMessage[index] + arrKey[index - counter]);
                } else {
                    arrMessage[index] = ((arrMessage[index] + arrKey[index - counter]) % 26);
                }
            });
        
            arrMessage.forEach((item,index) => {
                if (arrMessage[index] < -90) {
                    arrMessage[index] =  String.fromCharCode(arrMessage[index] * -1);
                } else if ( arrMessage[index] < 26) {
                    arrMessage[index] =  String.fromCharCode(arrMessage[index] + 65);
                } else {
                    arrMessage[index] =  String.fromCharCode((arrMessage[index] % 26) + 65);
                } 
            });
               
            return this.isDirect ? arrMessage.join('') : arrMessage.reverse().join('');
        }
    }

    decrypt (message, key) {
        if (arguments.length < 2 || typeof message !== 'string' ||  typeof key !== 'string') {
            throw  Error();
        } else if (key.length < message.length) {
            while (key.length <= message.length) {
                key = key + key;
            }
            const arrMessage = message.toUpperCase().split('');
            const arrKey = key.toUpperCase().split('');
           
            let counter = 0;

            arrMessage.forEach((item,index) => {
                if (item.charCodeAt() > 90) {
                    arrMessage[index] = item.charCodeAt() * -1;
                } else {
                    arrMessage[index] = item.charCodeAt() - 65;
                }
            });

            arrKey.forEach((item,index) => {
                arrKey[index] = item.charCodeAt() - 65;
            });
           
            arrMessage.forEach((item,index) => {
                if (arrMessage[index] < 0) {
                    counter++;
                } else {
                    arrMessage[index] = ((arrMessage[index] - arrKey[index - counter]) + 26);
                }
            });
              
            arrMessage.forEach((item,index) => {
                if (arrMessage[index] < -90) {
                    arrMessage[index] =  String.fromCharCode(arrMessage[index] * -1);
                } else if ( arrMessage[index] < 26) {
                    arrMessage[index] =  String.fromCharCode(arrMessage[index] + 65);
                } else {
                    arrMessage[index] =  String.fromCharCode(arrMessage[index] % 26 + 65);
                }
            });
               
            return this.isDirect ? arrMessage.join('') : arrMessage.reverse().join('');
            
        } else {
            const arrMessage = message.toUpperCase().split('');
            const arrKey = key.toUpperCase().split('');
           
            let counter = 0;

            arrMessage.forEach((item,index) => {
                if (item.charCodeAt() > 90) {
                    arrMessage[index] = item.charCodeAt() * -1;
                } else {
                    arrMessage[index] = item.charCodeAt() - 65;
                }
            });

            arrKey.forEach((item,index) => {
                arrKey[index] = item.charCodeAt() - 65;
            });
           
            arrMessage.forEach((item,index) => {
                if (arrMessage[index] < 0) {
                    counter++;
                } else {
                    arrMessage[index] = ((arrMessage[index] - arrKey[index - counter]) + 26);
                }
            });
               
            arrMessage.forEach((item,index) => {
                if (arrMessage[index] < -90) {
                    arrMessage[index] =  String.fromCharCode(arrMessage[index] * -1);
                } else if ( arrMessage[index] < 26) {
                    arrMessage[index] =  String.fromCharCode(arrMessage[index] + 65);
                } else {
                    arrMessage[index] =  String.fromCharCode(arrMessage[index] % 26 + 65);
                } 
            });
            return this.isDirect ? arrMessage.join('') : arrMessage.reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;
