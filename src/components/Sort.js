import React from 'react';

class Sort extends React.Component{
  render(){
    return(            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown ">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp Xếp 
                        <span className="fas fa-caret-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <a href="_blank" role="button" >
                            <span className="fas fa-sort-alpha-down pr-5"> &nbsp; Tên A-Z</span>
                            </a>
                        </li>
                        <li>
                            <a href="_blank" role="button">
                            <span className="fas fa-sort-alpha-down-alt pr-5"> &nbsp; Tên Z-A</span>
                            </a>
                        </li>

                        <li role="separator" className="divider"></li>

                        <li>
                            <a href="_blank" role="button" >Trạng Thái Kích Hoạt</a></li>
                        <li>
                            <a href="_blank" role="button" >Trạng Thái Ẩn</a>
                        </li>
                    </ul>
                </div>   
            </div>           

    )

  }
}

export default Sort;
