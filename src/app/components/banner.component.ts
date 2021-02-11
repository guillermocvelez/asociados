import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';





@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls:["./banner.component.scss"]
})

export class BannerComponent {
    
    img = [
        '../../assets/carouselImg.jpg',
        '../../assets/carouselImg02.jpg',
        '../../assets/carouselImg03.jpg'
    ];



    validate(){
        
        const options = document.querySelectorAll('option');
        const select = document.querySelectorAll('select')
        const inputs = document.querySelectorAll('input')
        const modal = document.getElementById('modal')
         
        let val1=false;
        let val2=false;

        select.forEach( (opt)=>{
            if(opt.value === ''){
                opt.classList.add('border', 'border-danger')
                val1 = false
            }
            else {
                opt.classList.remove('border', 'border-danger')
                val1 = true;
            }
        })

        inputs.forEach((inp) => {
            if(inp.value === ''){
                inp.classList.add('border', 'border-danger')
                val2 = false
            }
            else {
                inp.classList.remove('border', 'border-danger');
                val2=true;
            }
        })

        console.log(val1,val2);
        

       if (val1 && val2){        

        console.log(modal);
        modal?.classList.remove("d-none")
        modal?.classList.add("d-block")    
                   

        }
    
    }

    close(){
        
        const modal = document.querySelector('.success-modal')

        modal?.classList.remove('d-block');
                modal?.classList.add('d-none');
        
    }
}