
console.log(`ok`)
const NUM_EMAILS = 10;

const app = new Vue ({
        el : `#app`,
        data: {
            loading: true,
            emails: [],
        },
        
        created(){
            for( let i = 0; i < NUM_EMAILS; i++) {
                axios
                .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then((response)=>{
                    console.log(response);
                    const { data, status } = response;
                    if (status === 200) {
                        this.emails.push(data.response);
                    }
                });
            }

        },
    }

);






