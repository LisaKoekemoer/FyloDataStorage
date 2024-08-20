import './App.css';
import logo from './images/logo.svg';
import document from './images/icon-document.svg';
import folder from './images/icon-folder.svg';
import upload from './images/icon-upload.svg';

function App() {
  return (
    <>
      <div className='storage-component'>

        {/* Fylo-Functions Component */}
        <div className='fylo-functions'>
          <img className='logo' src={logo} alt="" />
          <div className='functions'>
            <div className='functions-comp'>
              <img src={document} alt="" />
            </div>
            <div className='functions-comp'>
              <img src={folder} alt="" />
            </div>
            <div className='functions-comp'>
              <img src={upload} alt="" />
            </div>
          </div>
        </div>

        {/* Storage Indicator Component */}
        <div className='storage'>
          <div className='storage-info'>
            <p className='storage-indication'>You've used <span>815 GB</span> of your storage</p>
            <div className='full-usage'>
              <div className='used-storage'>
                <div className='indicator'>
                </div>
              </div>
            </div>
            <div className='parameters'>
              <p>0 GB</p>
              <p>1000 GB</p>
            </div>
          </div>
        </div>

        {/* Remaining Storage Component */}
        <div className='bubble'>
          <h1>1<span>8</span>5</h1>
          <p>GB left</p>
        </div>
      </div>
    </>
  );
}

export default App;
