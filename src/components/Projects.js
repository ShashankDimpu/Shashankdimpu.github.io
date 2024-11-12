import React, { useState, useEffect } from 'react';
import './Projects.css';
import researchImage1 from '../assets/pr1.jpeg'; // Ensure this path is correct
import researchImage2 from '../assets/pr2.jpeg'; // Ensure this path is correct
import researchImage3 from '../assets/pr3.jpeg'; // Ensure this path is correct
import pr_img1 from '../assets/pr1_img1.png';
import pr_img2 from '../assets/pr1_img2.png';

const Research = () => {
  const [expandedProject, setExpandedProject] = useState(null); // Track which project is expanded

  useEffect(() => {
    const handlePopState = () => {
      // Close the expanded section when the back button is pressed
      setExpandedProject(null);
    };

    if (expandedProject) {
      window.history.pushState({ expanded: expandedProject }, "");
      document.body.style.overflow = 'hidden';  // Disable body scroll
    } else {
      document.body.style.overflow = 'auto';    // Re-enable body scroll when closed
    }

    // Listen for back/forward navigation
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [expandedProject]);

  const toggleProjectDetails = (project) => {
    setExpandedProject(expandedProject === project ? null : project);
  };

  return (
    <section id="research" className="research-section">
      <h2>Projects</h2>
      <div className="research-container">

        {/* Project 1 */}
        <div
          className={`research-card ${expandedProject === 'project1' ? 'research-expanded' : ''}`}
          onClick={() => toggleProjectDetails('project1')} 
        >
          <div className="research-image-wrapper">
            <img src={researchImage1} alt="Research 1" className="research-image" />
          </div>
          <div className="research-text">
            <h3>Colorizing Black & White Photos using Deep Learning</h3>
            <p>Utilized advanced deep learning models, particularly conditional GANs, for image colorization, 
               leveraging the Lab color space to achieve natural and visually appealing color predictions.</p>
            {expandedProject === 'project1' && (
              <div className="research-detailed-description research-full-screen" onClick={(e) => e.stopPropagation()}>
                <h3>Colorizing Black & White Photos using Deep Learning</h3>
                <p>
  The project titled "Colorizing Black & White Photos using Deep Learning" explores the fascinating intersection of artificial intelligence and image restoration. The primary goal was to develop a robust deep learning model capable of restoring black-and-white images to their original, or at least aesthetically realistic, color states. The field of image colorization has gained significant traction in recent years due to its applications in various industries, including entertainment, art restoration, and historical image recovery. 
</p>

<p>
  Our approach focused on using state-of-the-art deep learning architectures, including Convolutional Neural Networks (CNN), Residual Networks (ResNet), and Generative Adversarial Networks (GANs), to accomplish this task. By leveraging modern computing power and vast datasets, we aimed to create models that could generalize across a wide variety of black-and-white images and predict realistic color distributions.
</p>

<h4>1. Problem Statement</h4>
<p>
  The absence of color in historical photographs and early films leaves viewers with a sense of detachment. Color adds depth, context, and emotion to visual media, making it more engaging and lifelike. While manual colorization has been an option for many years, it is both time-consuming and subjective, leading to inconsistent results. 
</p>
<p>
  Our goal was to automate this process using deep learning, particularly focusing on grayscale images where we had no prior knowledge of the true colors. The challenge was not only to assign colors but to assign plausible and contextually accurate colors that fit the image's content. For example, sky regions should be colored blue, trees should be green, and human skin tones should be natural. This required the model to not only detect objects in the image but also understand their semantic meaning to apply the correct colors.
</p>
<img src={pr_img1} alt="img1" className="pr-img1"/>
<h4>2. Research Background and Literature Review</h4>
<p>
  Prior to commencing the project, we conducted an extensive literature review to understand the state of the art in image colorization. Early efforts in colorization were rule-based, requiring significant human intervention. These methods relied on user inputs or heuristics to determine what objects in the image should be colored. The advent of deep learning introduced fully automated methods, where models could learn to map grayscale images to colorized ones through supervised training on large datasets.
</p>
<p>
  Several groundbreaking papers were instrumental in shaping our approach:
</p>
<ul>
  <li>
    <strong>Cheng et al. (2015)</strong>: Proposed a deep convolutional neural network (CNN) that uses a fusion layer to combine low-level and high-level features for colorization.
  </li>
  <li>
    <strong>Zhang et al. (2016)</strong>: Introduced a model that used the LAB color space to separate luminance from chrominance, which inspired the preprocessing steps of our project.
  </li>
  <li>
    <strong>Isola et al. (2017)</strong>: Developed a conditional GAN architecture for image-to-image translation, which became a core influence for our work.
  </li>
</ul>
<p>
  Based on these prior works, we decided to build upon the success of CNNs and GANs for our own implementation.
</p>

<h4>3. Model Architectures</h4>
<p>
  To achieve our objective, we implemented several deep learning models, each with unique characteristics suited for different aspects of the task:
</p>
<ul>
  <li>
    <strong>Convolutional Neural Networks (CNN):</strong> CNNs are widely known for their ability to capture spatial hierarchies in images. In our project, CNNs served as the backbone of the colorization process, enabling the model to extract features from the grayscale images and predict plausible color values for each pixel.
  </li>
  <li>
    <strong>Residual Networks (ResNet):</strong> ResNet was integrated to address the vanishing gradient problem in deep models. By using skip connections, ResNet allowed the model to retain information across layers, making it more effective at handling complex images. ResNet also enabled us to train much deeper networks without sacrificing accuracy.
  </li>
  <li>
    <strong>Generative Adversarial Networks (GANs):</strong> GANs were used to refine the colorization process by introducing an adversarial learning mechanism. The generator produced colorized images, while the discriminator evaluated the realism of those images, encouraging the generator to produce more lifelike outputs. This adversarial process significantly improved the visual quality of the colorized images.
  </li>
</ul>

<h4>4. Data Preparation and Preprocessing</h4>
<p>
  A critical aspect of this project was preparing the dataset for training. We used the <strong>Landscape Image Colorization dataset</strong> from Kaggle, which contains 7,129 high-resolution images. Each image was resized to 150x150 pixels to ensure uniform input for the models. 
</p>
<p>
  The images were converted to the <strong>LAB color space</strong>, a color model that separates luminance (L) from chrominance (A and B channels). This allowed the models to focus on predicting the A and B channels (color information) while preserving the L channel (grayscale information) as input. By doing so, the models could leverage the structure and contrast from the L channel to better predict the colors in the image.
</p>
<p>
  Additionally, we applied data augmentation techniques to improve generalization. These techniques included random horizontal flipping, rotation, and slight changes in brightness and contrast. The goal was to make the models more robust to variations in image orientation and lighting conditions.
</p>

<h4>5. Training and Optimization</h4>
<p>
  Training deep learning models for image colorization requires careful attention to detail, particularly in terms of hyperparameter tuning. We trained each model using the <strong>Adam optimizer</strong>, which provided adaptive learning rates and helped achieve faster convergence.
</p>
<p>
  The loss functions we used included:
</p>
<ul>
  <li>
    <strong>Mean Squared Error (MSE):</strong> Used for pixel-wise color predictions, comparing the predicted color channels with the ground truth. MSE was particularly useful in training the CNN and ResNet models.
  </li>
  <li>
    <strong>Adversarial Loss:</strong> In the GAN models, the adversarial loss was key to improving the quality of the generated colorized images. This loss encouraged the generator to produce outputs that were indistinguishable from real colorized images, as judged by the discriminator.
  </li>
</ul>

<h4>6. Evaluation Metrics</h4>
<p>
  To assess the performance of our models, we employed several evaluation metrics:
</p>
<ul>
  <li>
    <strong>Structural Similarity Index (SSIM):</strong> SSIM is a perceptual metric that quantifies the similarity between two images. It takes into account luminance, contrast, and structural information. Our models achieved an SSIM score of <strong>0.985</strong> on the test set, indicating that the colorized images were nearly identical to the ground truth.
  </li>
  <li>
    <strong>Peak Signal-to-Noise Ratio (PSNR):</strong> PSNR measures the ratio between the maximum possible pixel value and the noise in the predicted image. Higher PSNR values indicate better image quality. Our best model obtained a PSNR score of <strong>32.5 dB</strong>, which is considered high for colorization tasks.
  </li>
  <li>
    <strong>Histogram Comparison:</strong> We used histogram comparison to analyze the color distribution of the predicted images versus the ground truth. Our model achieved a histogram similarity score of <strong>0.862</strong>, confirming that the predicted colors closely matched the true color patterns.
  </li>
</ul>
<img src={pr_img2} alt="img2" className="pr-img2"/>
<h4>7. Challenges and Limitations</h4>
<p>
  Despite the high-quality results, there were several challenges encountered during the project:
</p>
<ul>
  <li>
    <strong>Object Detection and Context Understanding:</strong> While the models performed well on simpler images, more complex scenes, particularly those with multiple objects or occlusions, proved challenging. The models sometimes struggled to assign the correct colors to ambiguous regions.
  </li>
  <li>
    <strong>Color Ambiguity:</strong> There is inherent ambiguity in colorizing black-and-white images because the original colors are unknown. For instance, a blue sky is often predicted correctly, but when objects like clothing or vehicles are involved, the model can sometimes choose unexpected colors.
  </li>
  <li>
    <strong>Training Time:</strong> The GAN model, while producing the best results, required significant computational resources and took considerably longer to train compared to the CNN and ResNet models.
  </li>
</ul>

<h4>8. Key Results and Contributions</h4>
<p>
  The final models were able to produce visually appealing colorized images that closely resembled the ground truth. Our approach demonstrated that deep learning models could generalize well across different image types and scenes. One of the key contributions of this project was the novel approach of combining LAB color space processing with adversarial learning to enhance both the speed and quality of colorization.
</p>

<h4>9. Conclusion and Future Work</h4>
<p>
  This project successfully demonstrated the use of deep learning models, particularly CNNs, ResNet, and GANs, for colorizing black-and-white images. While the models performed exceptionally well on many types of images, there remains room for improvement in handling more complex scenes and refining color predictions for ambiguous regions.
</p>
<p>
  Future work could involve incorporating additional contextual information into the models, perhaps through the use of attention mechanisms, which could help the models better understand the semantic content of images. Furthermore, experimenting with different color spaces and refining the adversarial training process may yield even better results.
</p>
                <button onClick={() => toggleProjectDetails('project1')} className="research-close-btn">Close</button>
              </div>
            )}
          </div>
        </div>

        {/* Project 2 */}
        <div
          className={`research-card ${expandedProject === 'project2' ? 'research-expanded' : ''}`}
          onClick={() => toggleProjectDetails('project2')} 
        >
          <div className="research-image-wrapper">
            <img src={researchImage2} alt="Research 2" className="research-image" />
          </div>
          <div className="research-text">
            <h3>Library Management System</h3>
            <p>Developed a Library Management System from inception, including database design and RESTful API 
            integration with a React frontend. Achieved seamless user interaction and efficient data management.</p>
            {expandedProject === 'project2' && (
              <div className="research-detailed-description research-full-screen" onClick={(e) => e.stopPropagation()}>
                <h3>Library Management System</h3>
                <p>
    The Library Management System was developed to digitize and streamline library operations, offering an intuitive and comprehensive interface for managing book inventories, user records, and transactions. By implementing this system, libraries can enhance efficiency, reduce manual errors, and provide a seamless experience for users and administrators alike.
  </p>
  
  <h4>Project Objectives:</h4>
  <ul>
    <li>Develop a centralized system to manage library resources effectively.</li>
    <li>Provide secure access for library staff and users, with different permission levels for various roles.</li>
    <li>Enable real-time tracking of borrowing, returns, and fines to ensure accurate record-keeping.</li>
  </ul>

  <h4>Key Features:</h4>
  <ul>
    <li>
      <strong>Database Architecture:</strong> Designed a relational database with 13 well-structured tables, including entities for Books, Users, Transactions, and Fine Management. This architecture supports scalability and data integrity while ensuring that library operations are seamlessly connected.
    </li>
    <li>
      <strong>Secure Authentication:</strong> Implemented SHA-256 encryption for user passwords, ensuring that user credentials are securely stored and accessed, protecting sensitive data from unauthorized access.
    </li>
    <li>
      <strong>Transaction Management:</strong> The system supports real-time tracking of check-outs, returns, and due dates, automatically updating records and alerting users about overdue items.
    </li>
    <li>
      <strong>Automated Fine Calculation:</strong> Integrated triggers to calculate fines on overdue books, automatically updating user accounts to ensure transparency and accuracy in library fees.
    </li>
  </ul>

  <h4>Technical Highlights:</h4>
  <ul>
    <li>
      <strong>Entity-Relationship Diagram:</strong> Created a detailed ER diagram to outline the relationships between key entities, facilitating a clear and logical database structure. This planning phase was critical for defining constraints and dependencies across the system.
    </li>
    <li>
      <strong>SQL Triggers and Indexing:</strong> Employed SQL triggers to automate repetitive tasks, such as updating overdue fines, and used indexing to boost the efficiency of frequently accessed queries, reducing the query time by up to 80%.
    </li>
    <li>
      <strong>Data Visualization with PowerBI:</strong> Leveraged PowerBI to create interactive dashboards that visualize library data, such as popular books, user borrowing trends, and fines collected, helping library staff make data-driven decisions.
    </li>
    <li>
      <strong>Development Tools:</strong> Built using MySQL for database management, PowerBI for data analysis, and SQL for database querying, ensuring a robust and scalable back-end system.
    </li>
  </ul>

  <h4>Impact and Results:</h4>
  <p>
    The Library Management System has transformed how library staff manage resources, allowing for efficient tracking of books, users, and transactions. By automating key processes like fine calculation and inventory management, the system has reduced administrative overhead and improved accuracy in record-keeping. With insights provided by PowerBI, library administrators can now make data-driven decisions to optimize resources and improve user satisfaction.
  </p>

  <p>
    Overall, this project demonstrated my ability to design and implement a full-fledged management system from the ground up, with a focus on scalability, security, and user experience.
  </p>
                <button onClick={() => toggleProjectDetails('project2')} className="research-close-btn">Close</button>
              </div>
            )}
          </div>
        </div>

        {/* Project 3 */}
        <div
          className={`research-card ${expandedProject === 'project3' ? 'research-expanded' : ''}`}
          onClick={() => toggleProjectDetails('project3')} 
        >
          <div className="research-image-wrapper">
            <img src={researchImage3} alt="Research 3" className="research-image" />
          </div>
          <div className="research-text">
            <h3>Price Prediction System using Machine Learning Models</h3>
            <p>Developed a machine learning-based price prediction system utilizing Flask for the frontend. Integrated data visualization libraries into the frontend to provide users with insightful visual representations of the predicted price trends.</p>
            {expandedProject === 'project3' && (
              <div className="research-detailed-description research-full-screen" onClick={(e) => e.stopPropagation()}>
                <h3>Price Prediction System using Machine Learning Models</h3>
                <p>
    The Price Prediction System was created to provide a data-driven approach for estimating prices based on various features such as size, weight, quality, and other relevant attributes. This project aimed to demonstrate how machine learning models can be leveraged to automate and optimize the price prediction process, thereby providing industries with actionable insights for decision-making. To enhance accessibility, we developed a comprehensive frontend and backend interface using Python Flask, allowing users to interact with the system seamlessly and receive real-time price predictions.
  </p>
  
  <h4>Project Objectives:</h4>
  <ul>
    <li>Develop a highly accurate and reliable price prediction system utilizing advanced machine learning algorithms.</li>
    <li>Implement a user-friendly web interface using Flask for backend and HTML/CSS/JavaScript for frontend to facilitate data input and visualization of results.</li>
    <li>Ensure scalability and adaptability of the system to handle a variety of datasets and different pricing scenarios.</li>
  </ul>

  <h4>Frontend and Backend Implementation:</h4>
  <ul>
    <li>
      <strong>Python Flask Framework:</strong> The backend was developed using Flask, which handled the processing and routing of user data, interfacing seamlessly with the machine learning models. Flask also managed API calls, ensuring smooth communication between the frontend and backend components.
    </li>
    <li>
      <strong>Interactive Web Interface:</strong> The frontend, built with HTML, CSS, and JavaScript, provided users with an intuitive platform for entering data and receiving predictions. This interface enabled real-time interactions, allowing users to explore different feature inputs and immediately see their impact on predicted prices.
    </li>
    <li>
      <strong>Real-Time Predictions:</strong> When a user submits data through the interface, it is processed by the backend and fed into the machine learning models. The prediction results are then returned and displayed dynamically on the frontend, offering users immediate insights into potential pricing.
    </li>
  </ul>

  <h4>Machine Learning Models and Techniques:</h4>
  <ul>
    <li>
      <strong>XGBoost Regression:</strong> As one of the primary models, XGBoost was chosen for its ability to handle complex patterns and deliver high accuracy. Through hyperparameter tuning, it achieved an impressive R2 score of 0.99 and a Mean Squared Error (MSE) of 26,261.85, indicating its strong predictive capabilities and resilience to overfitting.
    </li>
    <li>
      <strong>Polynomial Ridge Regression:</strong> This model was employed to capture nonlinear relationships between input variables, which often arise in pricing scenarios. Despite its simplicity, it provided valuable insights, especially when combined with other models in the ensemble. The model achieved an MSE of 1,359,612.43.
    </li>
    <li>
      <strong>Random Forest:</strong> Known for its robustness and accuracy, the Random Forest model performed well on this dataset with an R2 score of 0.999 and an MSE of 1,693.15. Its ensemble nature helped improve prediction accuracy by reducing variance and enhancing generalization.
    </li>
    <li>
      <strong>Ensemble Learning:</strong> By combining the outputs of multiple models, the system provided a more balanced and accurate prediction, leveraging the strengths of each model to counteract the others’ weaknesses.
    </li>
  </ul>

  <h4>Technical Highlights:</h4>
  <ul>
    <li>
      <strong>Data Preprocessing:</strong> Extensive data cleaning and transformation were conducted to handle missing values, normalize feature distributions, and encode categorical variables. These steps were crucial for maintaining data integrity and ensuring consistent input for the models.
    </li>
    <li>
      <strong>Hyperparameter Tuning:</strong> Using grid search and cross-validation techniques, we optimized model parameters such as learning rate, tree depth, and regularization factors. This process was integral to enhancing the model’s accuracy and stability.
    </li>
    <li>
      <strong>Data Visualization with PowerBI:</strong> To provide insights into model performance and predictions, PowerBI was used to create interactive visualizations. These dashboards allowed users to explore data distributions, understand feature importance, and evaluate the accuracy of predictions visually.
    </li>
    <li>
      <strong>Performance Metrics:</strong> In addition to R2 score and MSE, we monitored other metrics like Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE) to comprehensively evaluate model performance and optimize for both accuracy and reliability.
    </li>
  </ul>

  <h4>Impact and Results:</h4>
  <p>
    The Price Prediction System not only showcased advanced machine learning techniques but also demonstrated our ability to create a scalable and interactive full-stack application. By integrating real-time prediction capabilities, the system offers significant potential for businesses looking to enhance their pricing strategies through data-driven insights. The web interface ensures ease of use, making the system accessible even to non-technical users who can benefit from rapid, accurate pricing information.
  </p>

  <p>
    This project highlights my proficiency in both machine learning and full-stack development, with a particular focus on leveraging Flask for backend processing and deploying robust machine learning models for real-world applications.
  </p>

                <button onClick={() => toggleProjectDetails('project3')} className="research-close-btn">Close</button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Research;
