import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <div class="sidebar sidebar-left">
                    <div class="container has-background-img">
                        <figure class="background-img pink-gradient">
                            <img src="img/singer-690117_640.jpg" alt="" class=""></img>
                    </figure>
                            <div class="media w-100 my-3">
                                <figure class="avatar avatar-40 rounded-circle align-self-start ">
                                    <label class="checkbox-user-check">
                                        <input type="checkbox"></input>
                                            <i class="material-icons">check</i>
                            </label>
                                        <img src="./img/user1.png" alt="Generic placeholder image"></img>
                        </figure>
                                        <div class="media-body mx-70">
                                            <h5 class="time-title mb-0 text-white">John Smith</h5>
                                            <p class="mb-0 text-truncate text-white">johnsmith@example.com</p>
                                        </div>
                    </div>
                </div>

                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">insert_chart_outlined</i> <span>Dashboard</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="index.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Production</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="ecommerce.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>eCommerce</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="networking.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Networking</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="finance.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Finance</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="social.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Social</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="todo.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>ToDo</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">filter_none</i> <span>App Pages</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="profile.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Profile</span></a>
                                                <a href="mail.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Mail</span></a>
                                                <a href="chat.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Chat</span></a>
                                                <a href="contactus1.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Contact Us</span></a>
                                                <a href="contactus2.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Contact Us 2</span></a>
                                                <a href="team.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Team</span></a>
                                                <a href="about.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>About</span></a>
                                                <a href="blog.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Blog</span></a>
                                                <a href="blog-details.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Blog Details</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">shopping_cart</i> <span>eCommerce</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="product-blocks.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Products</span></a>
                                                <a href="product-details.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Product Detail</span></a>
                                                <a href="cart.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Cart</span></a>
                                                <a href="payment-info.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Payment/Info</span></a>
                                                <a href="invoice.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Invoice</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">assignment</i> <span>Other Pages</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="signin1.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Sign in</span></a>
                                                <a href="signin2.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Sign in 2</span></a>
                                                <a href="signup1.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Sign up</span></a>
                                                <a href="signup2.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Sign up 2</span></a>
                                                <a href="error1.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Error</span></a>
                                                <a href="error-4041.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>404</span></a>
                                                <a href="error-4042.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>404 2</span></a>
                                                <a href="error-5001.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>500</span></a>
                                                <a href="error-5002.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>500 2</span></a>
                                                <a href="comming-soon1.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Comming Soon</span></a>
                                                <a href="comming-soon2.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Comming Soon 2</span></a>
                                                <a href="faqs1.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>FAQs</span></a>
                                                <a href="faqs2.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>FAQs 2</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">equalizer</i> <span>Charts & Map</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="chartjs.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Chart js</span></a>
                                                <a href="sparklines.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Sparklines</span></a>
                                                <a href="vectormap-blocks.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>jVector map</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">devices</i> <span>Layouts</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="boxed-layout.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Boxed layout</span></a>
                                                <a href="full-width.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Full width</span></a>
                                                <a href="colors.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Color Scheme</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">insert_emoticon</i> <span>Icons</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="material-icons.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Material Icons</span></a>
                                                <a href="icon-style.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Icons Style</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">business_center</i> <span>Controls</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="card-blocks.html" class="nav-link  pink-gradient-active"><i class="material-icons icon"></i> <span>Card Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="carousel-blocks.html"><i class="material-icons icon"></i> <span>Carousel Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="chart-blocks.html"><i class="material-icons icon"></i> <span>Charts Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="chat-blocks.html"><i class="material-icons icon"></i> <span>Chat Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="event-blocks.html"><i class="material-icons icon"></i> <span>Event Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="large-dropdown.html"><i class="material-icons icon"></i> <span>Large Dropdowns</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="file-blocks.html"><i class="material-icons icon"></i> <span>File Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="media-blocks.html"><i class="material-icons icon"></i> <span>Media Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="navbar-blocks.html"><i class="material-icons icon"></i> <span>Navbar Block</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="news-blocks.html"><i class="material-icons icon"></i> <span>News Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="pricing-blocks.html"><i class="material-icons icon"></i> <span>Pricing Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="product-blocks.html"><i class="material-icons icon"></i> <span>Product Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="progress-range-blocks.html"><i class="material-icons icon"></i> <span>Progress and Range</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="rating-blocks.html"><i class="material-icons icon"></i> <span>Rating Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="summary-blocks.html"><i class="material-icons icon"></i> <span>Summary Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="timeline-blocks.html"><i class="material-icons icon"></i> <span>Timeline Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="user-blocks.html"><i class="material-icons icon"></i> <span>User Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="userlist-blocks.html"><i class="material-icons icon"></i> <span>Userlist Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="wizard-blocks.html"><i class="material-icons icon"></i> <span>Wizard Blocks</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="alerts.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Alerts</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="badges.html"><i class="material-icons icon"></i> <span>Badges</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="breadcrumb.html"><i class="material-icons icon"></i> <span>Breadcrumb</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="buttons.html"><i class="material-icons icon"></i> <span>Buttons</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="button-group.html"><i class="material-icons icon"></i> <span>Button Group</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="dropdown.html"><i class="material-icons icon"></i> <span>Dropdown</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="form-elements.html"><i class="material-icons icon"></i> <span>Form Elements</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="collapse.html"><i class="material-icons icon"></i> <span>Collapse</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="input-group.html"><i class="material-icons icon"></i> <span>Input Group</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="jumbotron.html"><i class="material-icons icon"></i> <span>Jumbotron</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="pagination.html"><i class="material-icons icon"></i> <span>Pagination</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="popover.html"><i class="material-icons icon"></i> <span>Popover</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="tooltip.html"><i class="material-icons icon"></i> <span>Tooltip</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="modal.html"><i class="material-icons icon"></i> <span>Modal</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">web</i> <span>Rich Controls</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a class="nav-link  pink-gradient-active" href="multiselect.html"><i class="material-icons icon"></i> <span>Multi Select</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="picker.html"><i class="material-icons icon"></i> <span>Picker</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="autocomplete.html"><i class="material-icons icon"></i> <span>AutoComplete</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="contextmenu.html"><i class="material-icons icon"></i> <span>Context Menu</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="editor.html"><i class="material-icons icon"></i> <span>Editor</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="toast-message.html"><i class="material-icons icon"></i> <span>Toast message</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="dragable_sortable.html"><i class="material-icons icon"></i> <span>Dragable Sortable</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="tourintro.html"><i class="material-icons icon"></i> <span>Tour Intro</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="dropzone.html"><i class="material-icons icon"></i> <span>DropZone</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">description</i> <span>Forms</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="form_credit_card.html" class="nav-link  pink-gradient-active"><i class="material-icons icon"></i> <span>Credit Card</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="form_donation.html"><i class="material-icons icon"></i> <span>Donation Form</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="form_authorization.html"><i class="material-icons icon"></i> <span>Authority Form</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="form_employee_review.html"><i class="material-icons icon"></i> <span>Employee Review</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="form_profile_info.html"><i class="material-icons icon"></i> <span>Profile</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="form_survay_review.html"><i class="material-icons icon"></i> <span>Survay Form</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pink-gradient-active" href="form_booking.html"><i class="material-icons icon"></i> <span>Booking Form</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">grid_on</i> <span>Tables</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="datatable.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>DataTable</span></a>
                                                <a href="footable.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>FooTable</span></a>
                                                <a href="table-blocks.html" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Table</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);" class="nav-link dropdwown-toggle"><i class="material-icons icon">domain</i> <span>Level 1</span><i class="material-icons icon arrow">expand_more</i></a>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a href="javascript:void(0);" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Level 2</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="javascript:void(0);" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Level 2</span></a>
                                                <ul class="nav flex-column">
                                                    <li class="nav-item">
                                                        <a href="javascript:void(0);" class="nav-link pink-gradient-active"><i class="material-icons icon"></i> <span>Level 3</span></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="backdrop"></div> </div>  );
                            }
                            }
                            
export default Sidebar;