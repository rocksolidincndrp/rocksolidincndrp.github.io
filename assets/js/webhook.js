async function sendform(ev) {
    ev.preventDefault();
    const Question1 = document
      .getElementById('Question1').value;
      const Question2 = document
      .getElementById('Question2').value;
      const Question3 = document
      .getElementById('Question3').value;
      const Question4 = document
      .getElementById('Question4').value;
      const Question5 = document
      .getElementById('Question5').value;
    const webhookBody = {
      embeds: [{
        title: 'Application',
        fields: [{
            name: 'What is your name?',
            value: Question1
        },
        {
            name: 'What is your phone number?',
            value: Question2
        },
        {
            name: 'Position you are applying for?',
            value: Question3
        },
        {
          name: 'Interview availability',
          value: Question4
        },
        {
        name: 'Tell us a fun fact about yourself',
        value: Question5
        },
        ],
      }],
    };
    const webhookUrl = 'https://discord.com/api/webhooks/1297219580766453893/66zRbgoETN5I9e9a0ON_RrmMkVUomyk9iSNQXe4HidroympwQKQ7NnQTydkM1A98ervI';
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });
    location.reload()
  }