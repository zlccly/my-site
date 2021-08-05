export default function(defaultDataValue = null){
    return{
        data(){
            return{
                data: defaultDataValue,
                isLoading: true
            }
        },
        async created(){
           this.data = await this.fetchData(); 
           this.isLoading = false;
        }
    }
}