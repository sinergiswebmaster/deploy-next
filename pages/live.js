import Layout from '../components/common/layout'
import Router from 'next/router'
import React, { useEffect } from "react"

export default function Live ({login}) {

    useEffect(() => {
        if(login == false){
            redirectHome()
        }
        console.log('LOGIN', login)
        $("#status").fadeOut() // will first fade out the loading animation
        $("#preloader").delay(500).fadeOut("slow") // will fade out the white DIV that covers the website.
    },[])

    function redirectHome() {
        Router.push('/')
    }
    return (
        <Layout live={true}>
             <div className="live-page">
                <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
                </div>
                <div className="wrapper">
            <div className="stripes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
            {/* <!--     *********    LIVE NOW     *********      --> */}
            <div className="subscribe-line subscribe-line-image pb-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ml-auto mr-auto">
                                    <div className="py-2 my-2">
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
            {/* <!--     *********   END LIVE NOW  *********      --> */}
                    
            {/* <!--     *********    PLAYER     *********      --> */}
            <div className="video-player pt-2">
                <div className="container">
                    {/* <!--<hr className="double mt-4">--> */}
                    <div className="row mt-1">
                        <div className="col-md-8">
                            <h4 className="category-sub title text-primary mt-0 mb-0 pt-0">Webinar en vivo</h4>
                            <h4 className="title my-0 pt-2"> Live Streaming Today: Overview</h4>
                        </div>
                        <div className="col-md-4 text-right">
                        <div className="down-btn">
                                 {/* <a className="btn download-btn btn-primary typeform-share link" href="https://sinergis.typeform.com/to/W748" data-mode="popup" data-hide-headers={true} data-hide-footer={true} data-submit-close-delay="0" target="_blank">Compártenos tu opinión <i className="ml-1 fa fa-check-circle"></i> </a>
                                 {(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()} */}
                        </div>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-6 ml-auto mt-1">
                            <div className="iframe-container">
                                <div className="embed-responsive embed-responsive-16by9">
                                <div id="player-placeholder" class="embed-responsive-item" >
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/lB8kBKzryrI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mr-auto mt-1">
                            <div className="down-btn">
                                <button className="btn download-btn btn-simple" data-toggle="modal" data-target="#exampleModal">Polling <i className="ml-1 fa fa-award"></i></button>
                            </div>
                            <div className="card card-border text-white card-spacingx mb-0">
                                <div className="card-body py-1">
                                    <div className="m-title-b">
                                    <div className="card-title text-black"><h6>Chat en vivo</h6></div>
                                        </div>
                                            <div className="scrollerchat">
                                                <div className="media text-right in w-75 mr-auto mb-4">
                                                    <div className="media-body p-3 mt-2 text-left">
                                                        Sample Text
                                                    </div>
                                                </div>
                                                <div className="media text-right out w-75 ml-auto mb-4">
                                                    <div className="media-body p-3 mt-2 text-left">
                                                       Sample Text
                                                    </div>
                                                </div>
                                                <div className="media text-right in w-75 mr-auto mb-4">
                                                    <div className="media-body p-3 mt-2 text-left">
                                                        Sample Text
                                                    </div>
                                                </div>
                                            </div>
                                        <section className="submit-msg">
                                            <div className="row pt-2 m-title-t">
                                                <div className="col-12 col-sm-8 pr-0 mt-2">
                                                    <div className="form-group mb-0 mr-0">
                                                        <input type="text" className="form-control" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4 pr-2 mt-2">
                                                    <button type="submit" className="btn btn-primary btn-round btn-blockk mx-0 mt-0">Enviar</button>
                                                </div>
                                            </div>
                                        </section>    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <hr />
                </div>
            </div>
            {/* <!--     *********    PLAYER     *********      --> */}
        
    </div>
            </div>
            
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <iframe src="https://app.sli.do/event/mbhtnvhz" height="100%" width="100%" style={{minHeight: 560}}></iframe>
      </div>
    </div>
  </div>
</div>
        </Layout>
    )
}

Live.getInitialProps = (ctx) => {
    const { query } = ctx
    if(query.login) {
        const login = query.login
        return {login}
    } else {
        const login = false
        return {login}
    }
    
}