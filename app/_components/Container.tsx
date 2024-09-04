type ContainerProps = {
    children: React.ReactNode;
  };
  
  const Container = ({ children }: ContainerProps) => {
    return (
      <div className="w-full max-w-[1200px] 2xl:max-w-[1500px] mx-auto">
        {children}
      </div>
    );
  };
  
  export default Container;
  