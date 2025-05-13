import { Button } from '@ds.e/react/lib'


const APP = () =>{
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%'
    }}>
      <div style={{ 
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1>Hello Monorepo</h1>
        <Button 
          title='I am a cute little button' 
          onClick={() => alert('Hello world')}
        >
          Click me
        </Button>
      </div>
    </div>
  )
}

export default APP