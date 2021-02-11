import { Component } from '@angular/core';


@Component({
    selector: 'form-component',
    templateUrl: './form.component.html',
    styleUrls:["./form.component.scss"]
})

export class FormComponent {
    validate(){
        
        const options = document.querySelectorAll('option');
        const select = document.querySelectorAll('select')
        const inputs = document.querySelectorAll('input')
        const modal = document.getElementById('modal')
         
        var val1=0;
        var val2=0;

        select.forEach( (opt)=>{
            if(opt.value === ''){
                opt.classList.add('border', 'border-danger')
                val1=0;
            }
            else {
                opt.classList.remove('border', 'border-danger')
                val1 = 1;
            }
        })

        inputs.forEach((inp) => {
            if(inp.value === ''){
                inp.classList.add('border', 'border-danger')
                val2=0;
            }
            else {
                inp.classList.remove('border', 'border-danger');
                val2=1;
            }
        })

       if ((val1 === 1) && (val2 === 1)){         

        console.log(modal);
        modal?.classList.remove("d-none")
        modal?.classList.add("d-block")
        
                   

        }
    
    }
}