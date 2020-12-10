import dotEnv from 'dotenv'

dotEnv.config()

import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })
