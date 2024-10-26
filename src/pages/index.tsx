// pages/index.tsx
import Layout from '../components/Layout';


const HomePage: React.FC = () => {
  return (
    <Layout>
  <div className="w-full">
        <img
          src="/images/banner.jpg"  // Ensure this is the correct path
          alt="Website Banner"
          className="w-full h-auto"  // Full width and auto height
        />
      </div>
    </Layout>
  );
};

export default HomePage;
