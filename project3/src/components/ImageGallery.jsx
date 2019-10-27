import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class ImageGallery extends React.Component {

    state = {
        imageGallery: [],
        value: '',
        currentImage: ['','']
    };

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleClick(){
        this.state.imageGallery.push(this.state.value)
        this.setState({
            value:'',
            currentImage:[
                            // image link
                            this.state.imageGallery[this.state.imageGallery.length-1],
                            // image index
                            this.state.imageGallery.length-1
                        ]
        })
        setTimeout(() => {
            console.log('imageGallery - ',this.state.imageGallery)
            console.log('currentImage - ',this.state.currentImage)
        }, 1000);
    }

    handleImageGallery(direction=0) {
        direction==0 ?
            // previous
            direction = [
                    [this.state.imageGallery[this.state.imageGallery.length-1],this.state.imageGallery.length-1],
                    [this.state.imageGallery[this.state.currentImage[1]-1],this.state.currentImage[1]-1],
                    this.state.imageGallery[this.state.currentImage[1]-1]
                ]
            :
            // next
            direction = [
                [this.state.imageGallery[0],0],
                [this.state.imageGallery[this.state.currentImage[1]+1],this.state.currentImage[1]+1],
                this.state.imageGallery[this.state.currentImage[1]+1]
            ]
        if(direction[2]==undefined){
            this.setState({
                currentImage: direction[0]
            })
            console.log(direction[0]);
        }
        else {
            this.setState({
                currentImage: direction[1]
            })
            console.log(direction[1]);
        }
      }


    render(){
        return(
            <div>
                <div>
                    <form>
                        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}></input>
                        <input type="button" value="ADD" onClick={() => this.handleClick()}></input>
                    </form>
                </div>
                <div>
                    <button onClick={() => this.handleImageGallery()}>
                            Previous
                    </button>
                    <img src={this.state.currentImage[0]} alt="enter image url" width="30%"></img>
                    <button onClick={() => this.handleImageGallery(1)}>
                            Next
                    </button>
                </div>
            </div>
        );
    };
}

export default ImageGallery;