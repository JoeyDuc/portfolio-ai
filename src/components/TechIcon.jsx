import pythonIcon from '../assets/tech/python.svg';
import javaIcon from '../assets/tech/java.svg';
import javascriptIcon from '../assets/tech/javascript.svg';
import typescriptIcon from '../assets/tech/typescript.svg';
import cppIcon from '../assets/tech/cpp.svg';
import cIcon from '../assets/tech/c.svg';
import scikitLearnIcon from '../assets/tech/scikit-learn.svg';
import tensorflowIcon from '../assets/tech/tensorflow.svg';
import pytorchIcon from '../assets/tech/pytorch.svg';
import pandasIcon from '../assets/tech/pandas.svg';
import numpyIcon from '../assets/tech/numpy.svg';
import matplotlibIcon from '../assets/tech/matplotlib.svg';
import seabornIcon from '../assets/tech/seaborn.svg';
import gitIcon from '../assets/tech/git.svg';
import dockerIcon from '../assets/tech/docker.svg';
import jupyterIcon from '../assets/tech/jupyter.svg';
import reactIcon from '../assets/tech/react.svg';
import htmlIcon from '../assets/tech/html.svg';
import cssIcon from '../assets/tech/css.svg';
import bootstrapIcon from '../assets/tech/bootstrap.svg';
import goIcon from '../assets/tech/go.svg';
import springBootIcon from '../assets/tech/springboot.svg';
import fastapiIcon from '../assets/tech/fastapi.svg';
import langchainIcon from '../assets/tech/langchain.svg';
import langgraphIcon from '../assets/tech/langgraph.svg';
import streamlitIcon from '../assets/tech/streamlit.svg';
import mysqlIcon from '../assets/tech/mysql.svg';
import postgresqlIcon from '../assets/tech/postgresql.svg';
import mongodbIcon from '../assets/tech/mongodb.svg';
import sqlServerIcon from '../assets/tech/microsoftsqlserver.svg';
import sqliteIcon from '../assets/tech/sqlite.svg';
import dockerComposeIcon from '../assets/tech/docker-compose.png';
import mlflowIcon from '../assets/tech/mlflow.svg';
import dvcIcon from '../assets/tech/dvc.svg';
import githubIcon from '../assets/tech/github.svg';
import linuxIcon from '../assets/tech/linux.svg';
import macosIcon from '../assets/tech/macos.svg';
import wiresharkIcon from '../assets/tech/wireshark.svg';
import gradleIcon from '../assets/tech/gradle.svg';
import viteIcon from '../assets/tech/vite.svg';
import esp32Icon from '../assets/tech/esp32.svg';
import mqttIcon from '../assets/tech/mqtt.svg';
import dht11Icon from '../assets/tech/dht11.svg';
import bh1750Icon from '../assets/tech/bh1750.svg';
import githubActionsIcon from '../assets/tech/github-actions.svg';

const TECHNOLOGY_LOGOS = {
  Python: [pythonIcon],
  Java: [javaIcon],
  Javascript: [javascriptIcon],
  JavaScript: [javascriptIcon],
  Typescript: [typescriptIcon],
  TypeScript: [typescriptIcon],
  'C++': [cppIcon],
  C: [cIcon],
  'Scikit-learn': [scikitLearnIcon],
  'scikit-learn': [scikitLearnIcon],
  TensorFlow: [tensorflowIcon],
  PyTorch: [pytorchIcon],
  Pandas: [pandasIcon],
  NumPy: [numpyIcon],
  Matplotlib: [matplotlibIcon],
  Seaborn: [seabornIcon],
  Git: [gitIcon],
  Docker: [dockerIcon],
  'Jupyter Notebook': [jupyterIcon],
  React: [reactIcon],
  'HTML/CSS/Bootstrap': [htmlIcon, cssIcon, bootstrapIcon],
  Go: [goIcon],
  'Spring Boot': [springBootIcon],
  FastAPI: [fastapiIcon],
  LangChain: [langchainIcon],
  LangGraph: [langgraphIcon],
  Streamlit: [streamlitIcon],
  MySQL: [mysqlIcon],
  PostgreSQL: [postgresqlIcon],
  MongoDB: [mongodbIcon],
  'Microsoft SQL Server': [sqlServerIcon],
  SQLite: [sqliteIcon],
  'Docker Compose': [dockerComposeIcon],
  MLflow: [mlflowIcon],
  DVC: [dvcIcon],
  GitHub: [githubIcon],
  Linux: [linuxIcon],
  macOS: [macosIcon],
  Wireshark: [wiresharkIcon],
  Gradle: [gradleIcon],
  Vite: [viteIcon],
  ESP32: [esp32Icon],
  MQTT: [mqttIcon],
  DHT11: [dht11Icon],
  BH1750: [bh1750Icon],
  'GitHub Actions': [githubActionsIcon],
};

// Concepts and protocols have no vendor logo and are rendered as text in Skills.
// Never substitute a generic symbol for an unknown technology.
export default function TechIcon({ name }) {
  const logos = TECHNOLOGY_LOGOS[name];
  if (!logos) return null;

  return (
    <span className="tech-icon-group" aria-hidden="true">
      {logos.map((src) => (
        <img
          key={src}
          className="tech-icon"
          src={src}
          alt=""
          width="22"
          height="22"
          draggable="false"
        />
      ))}
    </span>
  );
}
