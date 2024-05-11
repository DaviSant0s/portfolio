import Header from '../Header';
import HeaderScroll from '../HeaderScroll';
import './styles.css';

export default function Headers() {
  return (
    <>
      {false &&
        <Header/>
      }

      {true &&
        <HeaderScroll/>
      }
    </>
  )
}
