import React from "React";

export default ({ urls }) => (
    <div class="video" >
        {
            urls.map((url, index) => (
                <iframe src={url} key={index} frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            ))
        }
    </div>
)