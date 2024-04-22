import React from 'react';
// import "../assets/css/bootstrap.min.css";
// import "../assets/css/style.css";
// import "../assets/css/all.min.css";

function Blog() {
  return (
    <div className='events'>
      <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>Our Blog</h2>
            <ul>
              <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
              <li><i className="fas fa-angle-double-right"></i> Blog</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Blog Section */}
      <section className="our-blog">
        <div className="container">
          <div className="blog-row row">
            {/* Single Blog Item */}
            <div className="col-md-4 col-sm-6">
              <div className="single-blog">
                <figure>
                <img src="./images/image_01.jpg" alt="Child Education in Africa" />
                </figure>
                <div className="blog-detail">
                  <small>By Admin | August 10 2018</small>
                  <h4>Methods of Recruitments</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                  <div className="link">
                    <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-blog">
                <figure>
                <img src="./images/image_02.jpg" alt="Child Education in Africa" />
                </figure>
                <div className="blog-detail">
                  <small>By Admin | August 10 2018</small>
                  <h4>Methods of Recruitments</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                  <div className="link">
                    <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-blog">
                <figure>
                <img src="./images/image_03.jpg" alt="Child Education in Africa" />
                </figure>
                <div className="blog-detail">
                  <small>By Admin | August 10 2018</small>
                  <h4>Methods of Recruitments</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                  <div className="link">
                    <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-blog">
                <figure>
                <img src="./images/image_04.jpg" alt="Child Education in Africa" />
                </figure>
                <div className="blog-detail">
                  <small>By Admin | August 10 2018</small>
                  <h4>Methods of Recruitments</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                  <div className="link">
                    <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-blog">
                <figure>
                <img src="./images/image_05.jpg" alt="Child Education in Africa" />
                </figure>
                <div className="blog-detail">
                  <small>By Admin | August 10 2018</small>
                  <h4>Methods of Recruitments</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                  <div className="link">
                    <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-blog">
                <figure>
                <img src="./images/image_06.jpg" alt="Child Education in Africa" />
                </figure>
                <div className="blog-detail">
                  <small>By Admin | August 10 2018</small>
                  <h4>Methods of Recruitments</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                  <div className="link">
                    <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Blog Item */}
            {/* Add more Single Blog Items here */}
          </div>
        </div>
      </section>
      {/* End Our Blog Section */}
    </div>
  );
}

export default Blog;
