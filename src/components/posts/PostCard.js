import React from 'react';
import { PostStyle } from '../../styled';

class PostCard extends React.Component {
  render() {
      return (
        <PostStyle>
          <div class="card " style={{height: "100%", height: "700px"}}>
            <img class="image" src={this.props.src} alt="postimg" />
            <p style={{
              fontSize: "23px",
              fontWeight: "900",
              marginTop: "15px",
              color: "#424141"
            }}>{this.props.titulo}</p>
            <p style={{marginTop: "15px"}}>
              <font style={{ verticalAlign: 'inherit' }}>{this.props.resumo}</font>
            </p>
            <p class="lead mb-0" style={{"margin-top": "auto"}}>
              <a href={this.props.link} class="link1">
                <font style={{ verticalAlign: 'inherit' }}>
                  <font style={{ verticalAlign: 'inherit' }}>Continue lendo...</font>
                </font>
              </a>
            </p>
          </div>
        </PostStyle>
      );
  }
}

export default PostCard;
