import React,{Component} from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ZoomIn from '@material-ui/icons/ZoomIn'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import 'bootstrap/dist/css/bootstrap.min.css';
class ImageResults extends Component{
    state={
        open:false,
        currentImg:'',
        index:0
    }
    handleOpen=(img,i)=>{
        this.setState({open:true,currentImg:img,index:i})
    }
    handleClose=()=>{
        this.setState({open:false});
    }
    nextState=()=>{
        this.setState({index:0})
    }
    render()
    {
        let imageList;
        const {images}=this.props
        if(images)
        {
            //Showing images in a grid format
            imageList=(
                <GridList cols={4}>
                {  images.map((img,i)=>(
                    <GridTile key={img.id}>
                        <img src={img.largeImageURL} alt="" />
                        <GridListTileBar title={img.tags}
                        actionIcon={
                            <IconButton onClick={()=>this.handleOpen(img.largeImageURL,i)}>
                          <ZoomIn style={{fill:"white"}}/>
                            </IconButton>
                        }
                    />
                    </GridTile>
                    ))
                }
                </GridList>
            )
        }
        else{
            imageList=null;
        }

        return(
            <div style={{marginLeft:50,marginRight:50,marginTop:20}}>
            {imageList}
            <Dialog
            open={this.state.open}>
               
            {/* Zoom Image */}
            <img src={this.state.currentImg} alt="" style={{width:'100%'}} />

            {/* Previous Image */}
            <button onClick={()=>{
                if(this.state.index>=0){
                this.handleOpen(images[this.state.index].largeImageURL,this.state.index-1);}
                else
                 this.handleOpen(images[0].largeImageURL,0);

                }} style={{fontWeight:'bold',backgroundColor:"#dce6f4",borderRadius:3,outline:'none',borderTop:'none'}}>Prev</button>

             {/* Next Image */}
            <button onClick={()=>{
                if(this.state.index<images.length){
                this.handleOpen(images[this.state.index].largeImageURL,this.state.index+1);}
                else
                 this.handleOpen(images[images.length-1].largeImageURL,images.length-1);

            }} style={{fontWeight:'bold',backgroundColor:"#dce6f4",borderRadius:3,outline:'none',border:'none'}}>Next</button>

            {/* Close Image */}
            <DialogActions>
                <button onClick={this.handleClose} style={{width:40,height:30, paddingBottom:20,backgroundColor:"red",fontWeight:'bold',borderRadius:3}}>X</button>
            </DialogActions>
            </Dialog> 
            </div>
        )
    }
}
ImageResults.propTypes={
    images:PropTypes.array.isRequired
}

export default ImageResults;