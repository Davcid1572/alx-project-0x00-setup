import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Card />

      <div className="space-x-4 mt-4">
        {/* Small Button */}
        <Button title="Small Button" size="small" shape="rounded-sm" />
        {/* Medium Button */}
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        {/* Large Button */}
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};
export default Landing;
