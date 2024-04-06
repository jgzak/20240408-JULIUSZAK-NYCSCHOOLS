import {Component, ReactNode} from 'react'

interface State {
    hasError: boolean;
  }

interface Props {
    children: ReactNode;
  }

class SchoolsErrorBoundary extends Component<Props, State> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(_error: Error, _errorInfo: unknown) {
        this.setState({ hasError: true });
    }

    resetError() { 
        this.setState({ hasError: false });
    }   
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <>
            <h1>Application Error</h1>
            <p>Something went wrong</p>
            <button onClick={() => this.resetError.bind(this)()}>Try again</button>
        </>;
      }
  
      return this.props.children; 
    }
  }

export default SchoolsErrorBoundary;