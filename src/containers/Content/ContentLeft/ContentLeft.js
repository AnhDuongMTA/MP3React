import React, { Component } from "react";
import "./StyleContentLeft.css";
class ContentLeft extends Component {
  render() {
    return (
      <div>
        {/* begin slide banner */}

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride=""
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block image-slide-content"
                src="https://hinhnendep.xyz/wp-content/uploads/2016/08/hinh-anh-bien-dep-nhat-the-gioi-1.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block image-slide-content"
                src="https://img2.thuthuatphanmem.vn/uploads/2019/03/20/anh-dep-dem-trang_091459242.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item ">
              <img
                className="d-block image-slide-content"
                src="https://tophinhnen.com/wp-content/uploads/2018/01/hinh-nen-tinh-yeu-lang-man-nhat-25.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* end slide banner */}

        {/* begin music top */}

        {/* <div className="music-top">
          <p className="tittle-music-relax">MUSIC TOP</p>
            <div className="box-music-top">
              <div className="stt-music-top">1</div>

              <div className="line-music-top">-</div>

              <img
                className="image-music-top"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/8/3/6/c/836cf31f036fb8f89b78cfd07cd77477.jpg"
                alt=""
              />

              <div className="box-content-music-top">
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>

            <div className="">
              <h3>fohaohf</h3>
            </div>
            <div className="">
              <h3>18,261</h3>
            </div>
          <br />
        </div> */}

        {/* end music top */}

        {/* begin âm nhạc thư giãn */}
        
        <div className="music-relax">
          <p className="tittle-music-relax">ÂM NHẠC THƯ GIÃN</p>
          <div className="row no-gutters">
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div> 

        {/* end âm nhạc thư giãn */}

        {/* begin video hot */}

         <div className="video-hot">
          <p className="tittle-music-relax">ALBUM HOT</p>

          <div className="row no-gutters">
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
         

        {/* end video hot  */}

        {/* begin album hot */}

         <div className="video-hot">
          <p className="tittle-music-relax">VIDEO HOT</p>

          <div className="row no-gutters">
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
              <div className="card-relax-sub2">
                <img
                  className="image-relax"
                  src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/d/e/55de0d6ad364bc4af33ee47b1a0b7889.jpg"
                  alt=""
                />
                <p>
                  <a href="" className="tittle-music-card-relax">
                    EDM Thư Giãn Tốt Nhấtf sfsdfsdfsdfsdfdsfsdf
                  </a>
                  <br />
                  <a href="" className="singer-music-card-relax">
                    Jack, KCIM
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div> 

        {/* end album hot  */}


        <div className="row ">
          {/* begin music viet hot  */}

           <div className="col-md-6 col-sm-6 col-lg-6 col-6 music-viet-hot">
            <p className="tittle-music-relax">NHẠC VIỆT HOT</p>

            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
          </div>

          {/* end music viet hot  */}

          {/* begin music viet new  */}

           <div className="col-md-6 col-sm-6 col-lg-6 col-6 music-viet-new">
            <p className="tittle-music-relax">NHẠC VIỆT MỚI</p>

            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
          </div>

          {/* end music viet new  */}
        </div>
      
      
      </div>
    );
  }
}

export default ContentLeft;
