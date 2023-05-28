function validate()
{
    let fname=document.f1.fname.value;
    let lname=document.f1.lname.value;
    let email=document.f1.email.value;
    let msg=document.f1.msg.value;

    let alphaexp=/^[a-zA-Z ]+$/;
    let emailexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let msgexp=/^[a-zA-Z0-9 -]+$/;

    let status1=status2=status3=status4=false;
    if(fname=="")
    {
        document.getElementById('fnameNote').innerHTML="Please enter your fname";
        status1= false;
    }
    else
    {
        if(fname.match(alphaexp))
        {
            document.getElementById('fnameNote').innerHTML="";
            status1=true;
        }
        else
        {
            document.getElementById('fnameNote').innerHTML="Please enter characters only";

        }
    }
    if(lname=="")
    {

        document.getElementById('lnameNote').innerHTML="Please enter your lname";
        status2=false;
    }
    else
    {
        if(lname.match(alphaexp))
        {
            document.getElementById('lnameNote').innerHTML="";
            status2=true;
        }
        else
        {
            document.getElementById('lnameNote').innerHTML="Please enter characters only";
        }
    }

    if(email=="")
    {
        document.getElementById('emailNote').innerHTML="Please enter your email id";
        status3=false;
    }
    else
    {
        if(email.match(emailexp))
        {
            document.getElementById('emailNote').innerHTML="";
            status3=true;
        }
        else
        {
            document.getElementById('emailNote').innerHTML="Please enter valid email id";
            status3=false; 

        }
    }
    if(msg=="")
    {
        document.getElementById('msgNote').innerHTML="Please enter your message";
        status4=false;
    }
    else
    {
            document.getElementById('msgNote').innerHTML="";
            status4=true;
    }

    if(status1==true && status2==true && status3==true && status4==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}
