import { fetchPopularMovies, fetchSearchResult } from "./models";
import {renderCards,showSpinner,clearSpinner,takeInput,submitValue,clearFields} from './view/view'
import {elements} from './view/base'

async function loadPopularData(){
    // console.log(await fetchPopularMovies());
    showSpinner()
    let {results}=await fetchPopularMovies()
    clearSpinner()
    // console.log(results);
    renderCards(results)
}
loadPopularData()
let searchResult=''
let searchApiData=null
elements.input.addEventListener('change',takeInput)
elements.form.addEventListener('submit',async(e)=>{
    searchResult=submitValue(e)
    clearFields()
    let {results}=await fetchSearchResult(searchResult.trim())
    renderCards(results)
   
})
console.log(searchApiData);
console.log(searchResult);