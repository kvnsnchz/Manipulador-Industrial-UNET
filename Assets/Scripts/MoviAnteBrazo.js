#pragma strict



function Update () {
 
       
        if(Input.GetKey(KeyCode.W)){

          transform.Rotate(new Vector3(0,0,-30)*Time.deltaTime);

        }
        else{
          if(Input.GetKey(KeyCode.S)){
             
            transform.Rotate(new Vector3(0,0,30)*Time.deltaTime);

          }
        }
     
 
}