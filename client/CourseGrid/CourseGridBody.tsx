"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import course08 from  "../../components/assets/images/courses/4by3/08.jpg";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import axios from 'axios';




interface course {
  id:string;
  courseImage: string,
  courseTitle: string;
  lectures: number;
  price: number;
  courseLevel: string;
}




const CourseGridBody = () => {

  const [courses, setCourses] = useState<course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/node/api/core/getcourse`);
        const data = await response.json();
        setCourses(data); 
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []); 


  return (
    <div>

      <section className="py-5">
      <div className="container">
        <div className="row">

          {/* courseCollections UI */}
          <div className="col-lg-8 col-xl-9">

  
            <div className="row mb-4 align-items-center">

              <div className="col-xl-6">
                <form className="bg-body shadow rounded p-2">
                  <div className="input-group input-borderless">
                    <input className="form-control me-1" type="search" placeholder="Find your course"/>
                    <button type="button" className="btn btn-primary mb-0 rounded z-index-1"><i className="fas fa-search"></i></button>
                  </div>
                </form>
              </div>


              <div className="col-xl-3 mt-3 mt-xl-0">
                <form className="bg-body shadow rounded p-2 input-borderless">
                  <select className="form-select form-select-sm js-choice border-0" aria-label=".form-select-sm">
                    <option value="">Most Viewed</option>
                    <option>Recently search</option>
                    <option>Most popular</option>
                    <option>Top rated</option>
                  </select>
                </form>
              </div>


              <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center mt-3 mt-xl-0">

                <button className="btn btn-primary mb-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <i className="fas fa-sliders-h me-1"></i> Show filter
                </button>

                <p className="mb-0 text-end">Showing 1-7 of 32 result</p>
              </div>

            </div>

            
            <div className="row g-4">

            { courses.map(course => (
              <div className="col-sm-6 col-xl-4" key={course.id} >
                <div className="card shadow h-100">

                  <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${course.courseImage}`} width={100} height={100} className="card-img-top" alt="course image"/>

                  <div className="card-body pb-0">

                    <div className="d-flex justify-content-between mb-2">
                      <a href="#" className="badge bg-purple bg-opacity-10 text-purple">{course.courseLevel}</a>
                      <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart"></i></a>
                    </div>

                    <h5 className="card-title"><a href="#">{course.courseTitle}</a></h5>
                    <p className="mb-2 text-truncate-2">Proposal indulged no do sociable he throwing settling.</p>

                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                      <li className="list-inline-item me-0 small"><i className="far fa-star text-warning"></i></li>
                      <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                    </ul>
                  </div>

                  <div className="card-footer pt-0 pb-3">
                    <hr/>
                    <div className="d-flex justify-content-between">
                      <span className="h6 fw-light mb-0"><i><FiClock /></i>12h 56m</span>
                      <span className="h6 fw-light mb-0"><i><AiOutlineSchedule /></i>{course.lectures} lectures</span>
                    </div>
                  </div>
                </div>
              </div>
           ))}

  

            </div>

            <div className="col-12">
              <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
                <ul className="pagination pagination-primary-soft rounded mb-0">
                  <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><RiArrowDropLeftLine className='text-[25px]'/></a></li>
                  <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                  <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                  <li className="page-item mb-0"><a className="page-link" href="#">..</a></li>
                  <li className="page-item mb-0"><a className="page-link" href="#">6</a></li>
                  <li className="page-item mb-0"><a className="page-link" href="#"><RiArrowDropRightLine className='text-[25px]'/></a></li>
                </ul>
              </nav>
            </div>
    
          </div>
 
          {/* Sidebar Filter-Portion UI */}
          <div className="col-lg-4 col-xl-3 pt-5 pt-lg-0">
   
            <nav className="navbar navbar-light navbar-expand-lg mx-0">
              <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header bg-light">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Advance Filter</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-3 p-lg-0">
                  <form>
            
                      <div className="card card-body shadow p-4 mb-4">
             
                        <h4 className="mb-3">Category</h4>
               
                        <div className="col-12">
            
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault9"/>
                              <label className="form-check-label" htmlFor="flexCheckDefault9">All</label>
                            </div>
                            <span className="small">(1256)</span>
                          </div>
                       
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10"/>
                              <label className="form-check-label" htmlFor="flexCheckDefault10">Development</label>
                            </div>
                            <span className="small">(365)</span>
                          </div>
                    
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11"/>
                              <label className="form-check-label" htmlFor="flexCheckDefault11">Design</label>
                            </div>
                            <span className="small">(156)</span>
                          </div>
                       
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12"/>
                              <label className="form-check-label" htmlFor="flexCheckDefault12">Accounting</label>
                            </div>
                            <span className="small">(65)</span>
                          </div>
                      
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault17"/>
                              <label className="form-check-label" htmlFor="flexCheckDefault17">Translation</label>
                            </div>
                            <span className="small">(245)</span>
                          </div>
                       
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault13"/>
                              <label className="form-check-label" htmlFor="flexCheckDefault13">Finance</label>
                            </div>
                            <span className="small">(184)</span>
                          </div>
                       
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault14"/>
                              <label className="form-check-label" htmlFor="flexCheckDefault14">Legal</label>
                            </div>
                            <span className="small">(65)</span>
                          </div>
                    
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault15"/>
                              <label className="form-check-label" htmlFor="flexCheckDefault15">Photography</label>
                            </div>
                            <span className="small">(99)</span>
                          </div>
                          
                      
                          <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className="card card-body p-0">
     
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault16"/>
                                  <label className="form-check-label" htmlFor="flexCheckDefault16">Writing</label>
                                </div>
                                <span className="small">(178)</span>
                              </div>
                    
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault18"/>
                                  <label className="form-check-label" htmlFor="flexCheckDefault18">Marketing</label>
                                </div>
                                <span className="small">(104)</span>
                              </div>
                            </div>
                          </div>
                       
                          <a className=" p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                            See <span className="see-more ms-1">more</span><span className="see-less ms-1">less</span><i className="fas fa-angle-down ms-2"></i>
                          </a>
                        </div>
                      </div>

                      <div className="card card-body shadow p-4 mb-4">
                
                        <h4 className="mb-3">Price Level</h4>
                        <ul className="list-inline mb-0">
                   
                          <li className="list-inline-item">
                            <input type="radio" className="btn-check" name="options" id="option1"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="option1">All</label>
                          </li>
                       
                          <li className="list-inline-item">
                            <input type="radio" className="btn-check" name="options" id="option2"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="option2">Free</label>
                          </li>
                       
                          <li className="list-inline-item">
                            <input type="radio" className="btn-check" name="options" id="option3"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="option3">Paid</label>
                          </li>
                        </ul>
                      </div>
             
                      <div className="card card-body shadow p-4 mb-4">
                    
                        <h4 className="mb-3">Skill level</h4>
                        <ul className="list-inline mb-0">
                    
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-12"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-12">All levels</label>
                          </li>
                      
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-9"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-9">Beginner</label>
                          </li>
                       
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-10"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-10">Intermediate</label>
                          </li>
                        
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-11"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-11">Advanced</label>
                          </li>
                        </ul>
                      </div>
               
                      <div className="card card-body shadow p-4 mb-4">
                    
                        <h4 className="mb-3">Language</h4>
                        <ul className="list-inline mb-0 g-3">
                      
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-2"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-2">English</label>
                          </li>
                        
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-3"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-3">Francas</label>
                          </li>
                   
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-4"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-4">Hindi</label>
                          </li>
                  
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-5"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-5">Russian</label>
                          </li>
                     
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-6"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-6">Spanish</label>
                          </li>
                      
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-7"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-7">Bengali</label>
                          </li>
                         
                          <li className="list-inline-item mb-2">
                            <input type="checkbox" className="btn-check" id="btn-check-8"/>
                            <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-8">Portuguese</label>
                          </li>
                        </ul>
                      </div>
                    
                  </form>
                </div>

              
                <div className="d-grid p-2 p-lg-0 text-center">
                  <button className="btn btn-primary mb-0">Filter Results</button>
                </div>

              </div>
            </nav>
         
          </div>
         
        </div>
      </div>
      </section>



      {/* subsribe section */}
      <section className="pt-0">
      <div className="container position-relative overflow-hidden">
  
        <figure className="position-absolute top-50 start-50 translate-middle ms-3">
          <svg>
            <path d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z" fill="#fff" fill-rule="evenodd" opacity=".502"></path>
            <path d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z" fill="#fff" fill-rule="evenodd" opacity=".102"></path>
            <path d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z" fill="#fff" fill-rule="evenodd" opacity=".2"></path>
            <path d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z" fill="#fff" fill-rule="evenodd" opacity=".2"></path>
          </svg>
        </figure>
      
        <figure className="position-absolute bottom-0 end-0 mb-5 d-none d-sm-block">
          <svg className="rotate-130" width="258.7px" height="86.9px" viewBox="0 0 258.7 86.9">
            <path stroke="white" fill="none" stroke-width="2" d="M0,7.2c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5 c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5s16-25.5,31.9-25.5"></path>
            <path stroke="white" fill="none" stroke-width="2" d="M0,57c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5 c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5s16-25.5,31.9-25.5"></path>
          </svg>
        </figure>
        
        <div className="bg-grad-pink p-3 p-sm-5 rounded-3">
          <div className="row justify-content-center position-relative">

            <figure className="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
              <svg width="141px" height="141px">
                <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z"></path>
              </svg>
            </figure>
         
            <div className="col-12 position-relative my-2 my-sm-3">
              <div className="row align-items-center">
              
                <div className="col-lg-6">
                  <h3 className="text-white mb-3 mb-lg-0">Are you ready for a more great Conversation?</h3>
                </div>
               
                <div className="col-lg-6 text-lg-end">
                  <form className="bg-body rounded p-2">
                    <div className="input-group">
                      <input className="form-control border-0 me-1" type="email" placeholder="Type your email here"/>
                      <button type="button" className="btn btn-dark mb-0 rounded">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      </section>

    </div>
  )
}

export default CourseGridBody