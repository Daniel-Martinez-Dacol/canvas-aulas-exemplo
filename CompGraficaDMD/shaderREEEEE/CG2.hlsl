sampler s0 : register(s0);

float4 main(float2 tex : TEXCOORD0) : COLOR {
    
    float4 rgb = tex2D(s0,tex);
    if (1.1 *(rgb[0] + rgb[2]) - rgb[1] < 0){
        rgb = float4(0,1,1,1);
    }
    return rgb;
}